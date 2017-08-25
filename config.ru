require 'rack/rewrite'

use Rack::Rewrite do
  r301 %r{/about}, 'https://www.axiomq.com/team/'
  r301 %r{/portfolio}, 'https://www.axiomq.com/portfolio/'
  r301 %r{/contact}, 'https://www.axiomq.com/contact/'
  r301 %r{/google377fad0c45f8f3a8.html}, 'https://www.axiomq.com/google377fad0c45f8f3a8.html'
  r301 %r{/googledfea088bd335156e.html}, 'https://www.axiomq.com/googledfea088bd335156e.html'
end

run lambda { |env| [301, {'Location'=>'https://www.axiomq.com/'}, StringIO.new("")] }
