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
    `sed -i -e 's/api.dev.rmn.af83.com/api.art.preprod-apiphoto.rmngp.fr/g;s/dev.rmn.af83.com/preprod-apiphoto.rmngp.fr/g' build/index.html`
    `rsync -avz build/ rmngpuser@preprod-apiphoto.rmngp.fr:/home/rmngpuser/htdocs/API/apidocs`
  end

  desc "Deploy to production environment"
  task production: [:build] do
    puts "Deploying to production environment..."
    `sed -i -e 's!http://api\.dev\.rmn\.af83\.com!https://api\.art\.rmngp\.fr!g;s!http://dev\.rmn\.af83\.com!https://rmngp\.fr!g;s!http://api_endpoint_here!https://api_endpoint_here!g' build/index\.html`
    `rsync -avz build/ rmngpuser@api.rmngp.fr:/home/rmngpuser/htdocs/API/apidocs`
  end
end
