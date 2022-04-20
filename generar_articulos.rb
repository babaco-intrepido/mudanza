#!/usr/bin/env ruby

require 'csv'
require 'yaml'

BASE_DIR = 'content/articulos'
archivo = "#{BASE_DIR}/Inventario Babaco - Hoja 1.csv"

def snake_case(string)
  string.downcase.gsub(' ', '-')
end

def to_articulo(item)
  {
    'titulo' => item['Nombre'],
    'descripcion' => item['Descripción'],
    'cantidad' => item['Cantidad'].nil? ? 1 : item['Cantidad'].to_i,
    'categoria' => item['Rubro'],
    'foto1' => item['Foto 1'] || '',
    'foto2' => item['Foto 2'] || '',
    'foto3' => item['Foto 3'] || ''
  }
end

def generar_archivo(articulo)
  File.open("#{BASE_DIR}/#{snake_case(articulo['titulo'].gsub('/', ''))}.md", 'w') do |out|
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
