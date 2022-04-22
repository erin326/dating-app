Rails.application.routes.draw do

  namespace :api do 

    resources :users, only: [:index, :update, :show, :destroy]
    resources :conversations, only: [:create, :index, :show] do 
      resources :messages, only: [:create, :index, :show]
    end

    get '/browse', to: 'browse#browse'
    post 'approve/:id', to: 'browse#approve'
    post 'decline/:id', to: 'browse#decline'
    get 'matches', to: 'browse#matches'
    get 'match/:id', to: 'browse#show_match'
    get '/open_conversation/:id', to: 'browse#open_conversation'
    get 'other_user_convo/:id', to: 'conversations#other_user_convo'

    get '/all_users', to: 'users#all_users'
    get '/location', to: 'users#location'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    # mount ActionCable.server => '/cable'
    mount ActionCable.server => '/cable'

  end

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
# mount ActionCable.server => './cable'