Rails.application.routes.draw do
  get '*path', to: 'teams#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
