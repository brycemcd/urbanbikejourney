require 'sinatra/base'
require 'rack/protection'

module UrbanBikeJourney
  class Application < Sinatra::Base

    set :root,  "#{File.dirname(__FILE__)}/../../"
    set :views, Proc.new { File.join(root, "views") }

    configure do
      enable :logging, :show_exceptions
    end

    get '/' do
      erb :index
    end
  end
end
