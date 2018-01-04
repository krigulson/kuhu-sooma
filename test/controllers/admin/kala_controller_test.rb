require 'test_helper'

class Admin::KalaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_kala_index_url
    assert_response :success
  end

end
