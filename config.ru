require 'rack-timeout'

$:.unshift './lib'

require 'urban_bike_journey/application'

if ENV['RACK_ENV'] == 'development'
  require 'dotenv'
  Dotenv.load
end

use Rack::Timeout
Rack::Timeout.timeout = 10

run UrbanBikeJourney::Application.run!
