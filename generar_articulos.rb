#!/usr/bin/env ruby

require 'csv'
require 'yaml'

CONTENT_DIR = 'content/articulos'
IMAGES_DIR = 'public/images'
archivo = "#{CONTENT_DIR}/Inventario Babaco - Hoja 1.csv"

def snake_case(string)
  string.downcase.gsub(' ', '-')
end

def nombre_foto(item, numero)
  valor = "#{item['Codigo foto']}#{numero}.jpg"
  File.exist?("#{IMAGES_DIR}/#{valor}") ? "/images/#{valor}" : ''
end

def to_articulo(item)
  {
    'titulo' => item['Nombre'],
    'descripcion' => item['Descripción'],
    'cantidad' => item['Cantidad'].nil? ? 1 : item['Cantidad'].to_i,
    'categoria' => item['Rubro'],
    'foto1' => nombre_foto(item, 1),
    'foto2' => nombre_foto(item, 2),
    'foto3' => nombre_foto(item, 3)
  }
end

def generar_archivo(articulo)
  File.open("#{CONTENT_DIR}/#{snake_case(articulo['titulo'].gsub('/', ''))}.md", 'w') do |out|
    YAML.dump(articulo, out)
  end
end

inventario = CSV.read(archivo, headers: true).map(&:to_h)

articulos = 
  inventario
    .select { |it| it['Destino'].include?('Vender') || it['Destino'].include?('Regalar') }
    .select { |it| it['Estado'] != 'Vendido' }
    .map(&method(:to_articulo))

puts "Se encontraron #{articulos.size} articulos"

articulos.each(&method(:generar_archivo))
