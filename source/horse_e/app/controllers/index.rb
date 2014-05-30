


get '/' do
  # Look in app/views/index.erb
  session.clear

  erb :index
end


post '/' do
  $content = []
    i = 0
    File.open("tweets.txt", "r").each_line do |line|
      $content << line.chop if i % 4 == 0
      i += 1
    end

  if request.xhr?

   "<p>#{$content.sample}</p>"

  else
    # session[:tweet] = $content.sample
    redirect 'https://www.youtube.com/watch?v=oavMtUWDBTM'
  end

end
