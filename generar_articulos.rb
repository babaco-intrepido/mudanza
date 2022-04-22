#!/usr/bin/env ruby

require 'csv'
require 'yaml'

CONTENT_DIR = 'content/articulos'
PUBLIC_DIR = 'public'
IMAGES_DIR = 'images/articulos'
archivo = "#{CONTENT_DIR}/Inventario Babaco - Hoja 1.csv"

def snake_case(string)
  string.downcase.gsub(' ', '-')
end

def nombre_foto(item, numero)
  valor = "#{item['Codigo foto']}#{numero}.jpg"
  File.exist?("#{PUBLIC_DIR}/#{IMAGES_DIR}/#{valor}") ? "/#{IMAGES_DIR}/#{valor}" : nil
end

def to_articulo(item)
  {
    'titulo' => item['Nombre'],
    'descripcion' => item['Descripción'],
    'cantidad' => item['Cantidad'].nil? ? 1 : item['Cantidad'].to_i,
    'categoria' => item['Rubro'],
    'precio' => item['Valor estimado'].nil? ? nil : Integer(item['Valor estimado']),
    'entrega' => item['¿Cuándo se entrega?'],
    'foto1' => nombre_foto(item, 1),
    'foto2' => nombre_foto(item, 2),
    'foto3' => nombre_foto(item, 3)
  }
end

def generar_archivo!(articulo)
  File.open("#{CONTENT_DIR}/#{snake_case(articulo['titulo'].gsub('/', ''))}.md", 'w') do |out|
    YAML.dump(articulo, out)
  end
end

def limpiar_archivos!
  Dir["#{CONTENT_DIR}/*.md"].each { |it| File.unlink it }
end

inventario = CSV.read(archivo, headers: true).map(&:to_h)

articulos = 
  inventario
    .select { |it| it['Destino'].include?('Vender') || it['Destino'].include?('Regalar') }
    .select { |it| it['Estado'] != 'Vendido' }
    .map(&method(:to_articulo))

puts "Se encontraron #{articulos.size} articulos"

limpiar_archivos!
articulos.each(&method(:generar_archivo!))
