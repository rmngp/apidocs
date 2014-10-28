module RedcarpetHeaderFix
  @@ids = {}

  def header(text, level, id)
    clean_id = id.gsub(/[\.]/, '-').gsub(/[^a-zA-Z0-9\-_]/, '')
    if @@ids[clean_id].nil?
      @@ids[clean_id] = 0
    else
      @@ids[clean_id] += 1
      clean_id = "#{clean_id}-#{@@ids[clean_id]}"
    end
    "<h#{level} id='#{clean_id}'>#{text}</h#{level}>"
  end
end

require 'middleman-core/renderers/redcarpet'
Middleman::Renderers::MiddlemanRedcarpetHTML.send :include, RedcarpetHeaderFix
