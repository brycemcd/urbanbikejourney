require 'sinatra'
require 'dotenv'
require './urbanbikejourney'

Dotenv.load

run UrbanBikeJourney
