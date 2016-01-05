get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  @die = Die.new(params[:sides].to_i)
  num = @die.roll.to_s
  if request.xhr?
    num
  else
    redirect "/"
  end
end
