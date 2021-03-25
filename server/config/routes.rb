Rails.application.routes.draw do
  #Comments routes
  get '/comments' => 'comment#index'
  post '/comment' => 'comment#create'


  #Restaurants routes
  get '/restaurants' => 'restaurant#index'
  get '/restaurant/:id' => 'restaurant#show'
  post '/restaurant' => 'restaurant#create'

end
