# frozen_string_literal: true

Rails.application.routes.draw do
  root 'decks#show'

  resource 'deck', only: [:show] do
    resources 'cards', only: %i[new create destroy] do
      resource 'signpost', only: [:create]
    end

    get 'cards/new_two', to: 'cards#new_two'

    get 'test', to: 'decks#test'
  end
end
