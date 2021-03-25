Rails.application.routes.draw do
  #comments routes
  get '/comments' => 'comment#index'
  post '/comment' => 'comment#create'
end
