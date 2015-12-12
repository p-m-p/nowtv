Then /I should see the (\d+) most recent calls/ do |call_count|
  expect(all('.call-charge')).to have_exactly(call_count).items
end

When /I click on (.*)$/ do |button_text|
  find_button(button_text).click
end

Then /I should see more than (\d+) calls/ do |call_count|
  expect(all('.call-charge')).to have_at_least(call_count.to_i + 1).items
end
