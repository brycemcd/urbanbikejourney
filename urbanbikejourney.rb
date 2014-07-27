class UrbanBikeJourney < Sinatra::Base
  get '/' do
    erb :index
  end
end
