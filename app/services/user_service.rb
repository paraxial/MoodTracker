  class UserService
    def self.build(user)
      if user.valid?
        user.save
        return { user: user }
      end

      { errors: user.errors.messages }
    end
  end
