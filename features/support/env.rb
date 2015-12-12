require 'rspec'
require 'rspec/collection_matchers'
require 'capybara/dsl'
require 'capybara/cucumber'
require 'capybara/poltergeist'

RSpec.configure do |config|
  config.include Capybara::DSL
end

Capybara.configure do |config|
  config.run_server = false
  config.default_driver = :poltergeist
  config.app_host = 'http://localhost:8080'
end
