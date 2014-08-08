require 'sinatra/base'

module UrbanBikeJourney
  class Application < Sinatra::Base
    get '/' do
      erb :index
    end
  end
end
