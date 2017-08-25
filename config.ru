require 'rack/rewrite'

use Rack::Rewrite do
  r301 %r{/about}, 'https://www.axiomq.com/team/'
  r301 %r{/portfolio}, 'https://www.axiomq.com/portfolio/'
  r301 %r{/contact}, 'https://www.axiomq.com/contact/'
end

run lambda { |env| [301, {'Location'=>'https://www.axiomq.com/'}, StringIO.new("")] }
