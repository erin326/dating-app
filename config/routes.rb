Rails.application.routes.draw do

  namespace :api do 

    resources :users, only: [:index, :update, :show]
    resources :conversations do 
      resources :messages
    end

    get '/browse', to: 'browse#browse'
    post 'approve/:id', to: 'browse#approve'
    post 'decline/:id', to: 'browse#decline'
    get 'matches', to: 'browse#matches'
    post '/conversation/:id', to: 'browse#conversation'

    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
# mount ActionCable.server => './cable'