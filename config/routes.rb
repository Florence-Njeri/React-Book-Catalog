Rails.application.routes.draw do
  root to: "books#index"
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
    end
  end
end
