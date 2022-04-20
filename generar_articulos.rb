#!/usr/bin/env ruby

require 'yaml'

BASE_DIR = 'content/articulos'
archivo = "#{BASE_DIR}/inventario.yml"

def snake_case(string)
  string.downcase.gsub(' ', '-')
end

def to_articulo(item)
  { 
    'titulo' => item['Nombre'], 
    'descripcion' => item['Descripción'], 
    'cantidad' => item['Cantidad'].empty? ? 1 : item['Cantidad'].to_i,
    'categoria' => item['Rubro'],
    'foto1' => '',
    'foto2' => '',
    'foto3' => ''
  }
end

def generar_archivo(articulo)
  File.open("#{BASE_DIR}/#{snake_case(articulo['titulo'].gsub('/', ''))}.md", 'w') do |out|
    YAML.dump(articulo, out)
  end
end

inventario = YAML.load_file archivo

articulos = 
  inventario
    .select { |it| it['Destino'].include?('Vender') || it['Destino'].include?('Regalar') }
    .select { |it| it['Estado'] != 'Vendido' }
    .map(&method(:to_articulo))

puts "Se encontraron #{articulos.size} articulos"

articulos.each(&method(:generar_archivo))
