require 'middleman-gh-pages'

task :default => [:build]

namespace :deploy do
  desc "Deploy to dev environment"
  task dev: [:build] do
    puts "Deploying to development environment..."
    `rsync -avz build/ rmn@doc.dev.rmn.af83.com:apidocs`
  end

  desc "Deploy to production environment"
  task production: [:build] do
    puts "I don't know how to do that!"
  end
end
