require 'pp'

  $content = []
    File.open('fortune.txt', "r").each_line do |line|
      $content << line
    end

pp $content.count
