Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  root 'teams#index'
  get '*path', to: 'teams#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
