$:.unshift './lib'

require 'urban_bike_journey/application'

if ENV['RACK_ENV'] == 'development'
  require 'dotenv'
  Dotenv.load
end

run UrbanBikeJourney::Application.run!
