require 'pp'

content = []
i = 0
File.open("tweets.txt", "r").each_line do |line|
    content << line.chop if i % 4 == 0
    i += 1
end

pp content.count
