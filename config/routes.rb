Rails.application.routes.draw do
  post 'places/index'

  namespace :admin do
    get 'kala/index'
  end

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root "home#index"
end
