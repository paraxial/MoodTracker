Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, skip: [:registrations, :passwords, :sessions]

  namespace :api, defaults: { format: :json } do
    scope module: :v1 do
      devise_scope :user do
        post '/user', to: 'user#create'
      end
    end
  end
end
