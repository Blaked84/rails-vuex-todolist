json.extract! todo,
              # :id,
              :name,
              :done
json.url todo_url(todo, format: :json)
