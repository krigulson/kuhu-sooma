class HomeController < ApplicationController

  def index
    @places        = Place.all
    @placesHistory = PlacesHistory.all.order(created_at: :desc).first(15)
  end

end
