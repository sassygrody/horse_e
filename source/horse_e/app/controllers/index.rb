
get '/' do
  # Look in app/views/index.erb
  session.clear

  erb :index
end

get '/horse' do
  session[:page] = 'horse'
  erb :horse_home
end

post '/horse' do
  @content = []
    i = 0
    File.open("tweets.txt", "r").each_line do |line|
      @content << line.chop if i % 4 == 0
      i += 1
    end

  if request.xhr?
    session[:text] = @content.sample
    erb :twilio, layout: false
  else
    # session[:tweet] = @content.sample
    redirect 'https://www.youtube.com/watch?v=oavMtUWDBTM'
  end
end

get '/fortune' do
  session[:page] = 'fortune'
  erb :fortune_home
end

post '/fortune' do
  @content = []
    i = 0
    File.open("fortune.txt", "r").each_line do |line|
      @content << line
    end

  if request.xhr?
    session[:text] = @content.sample
    erb :twilio, layout: false
  else
    # session[:tweet] = $content.sample
    redirect 'https://www.youtube.com/watch?v=oavMtUWDBTM'
  end

end

post '/text' do

  receiver = params[:number]
  phone_number = '+16146826913'
  account_sid = 'AC101ba4a75cdce441654a3d3106e3d48b'
  auth_token = '4aa1d1030c313c3167e718292723aff0'

  @new_client = Twilio::REST::Client.new(account_sid, auth_token)

  @new_client.account.messages.create(
    :from => phone_number,
    :to => receiver,
    :body => session[:text]
    )

  erb :sent_message, layout: false

end

post '/friends' do
  erb :form, layout: false
end

