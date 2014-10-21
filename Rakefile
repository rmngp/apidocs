require 'middleman-gh-pages'

task :default => [:build]

namespace :deploy do
  desc "Deploy to dev environment"
  task dev: [:build] do
    puts "Deploying to development environment..."
    `rsync -avz build/ rmn@api.dev.rmn.af83.com:apidocs`
  end

  desc "Deploy to preprod environment"
  task preprod: [:build] do
    puts "Deploying to preprod environment..."
    `sed -i -e 's/api.dev.rmn.af83.com/preprod-apiphoto.api.rmngp.fr/g;s/dev.rmn.af83.com/preprod-apiphoto.rmngp.fr/g' build/index.html`
    `rsync -avz build/ rmngpuser@preprod.rmn.fr:/home/vsftpd/rmngpuser/htdocs/API/apidocs`
  end

  desc "Deploy to production environment"
  task production: [:build] do
    puts "I don't know how to do that!"
    `sed -i -e 's/api.dev.rmn.af83.com/api.lablabrmngp.fr/g;s/dev.rmn.af83.com/labrmngp.fr/g' build/index.html`
    `rsync -avz build/ rmngpuser@labrmngp.fr:/home/vsftpd/rmngpuser/htdocs/API/apidocs`
  end
end
