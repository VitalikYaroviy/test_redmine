Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :jobs
      resources :authentications, only: :create
      resource  :authentications, only: %i[show destroy]
      namespace :admin do
        resources :jobs
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
