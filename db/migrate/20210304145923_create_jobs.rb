class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.integer :name
      t.integer :category
      t.integer :hours
      t.references :user, null: false

      t.timestamps
    end

    add_index :jobs, :name
    add_index :jobs, :category
  end
end
