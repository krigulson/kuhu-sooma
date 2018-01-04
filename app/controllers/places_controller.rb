class PlacesController < ApplicationController
  
  before_action :authenticate_user!

  def index
    @places = Place.all.shuffle  
    PlacesHistory.create(place: @places.last, user: current_user)

    render json: {places: @places.map{|a| a.name }, place_name: @places.last.name, user_name: current_user.name}, :callback => 'randomPicker'
  end


  private

  def set_places
    
  end

end
