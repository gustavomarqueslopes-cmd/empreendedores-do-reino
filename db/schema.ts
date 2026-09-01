import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const entrepreneurs = sqliteTable('entrepreneurs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  company: text('company').notNull(),
  role: text('role').notNull(),
  segment: text('segment').notNull(),
  companySize: text('company_size').notNull(),
  businessModel: text('business_model').notNull(),
  challenge: text('challenge').notNull(),
  aiMaturity: text('ai_maturity').notNull(),
  seeks: text('seeks').notNull(),
  offers: text('offers').notNull(),
  website: text('website'),
  createdAt: text('created_at').notNull(),
}, (table) => [
  index('idx_entrepreneurs_state').on(table.state),
  index('idx_entrepreneurs_segment').on(table.segment),
  index('idx_entrepreneurs_created_at').on(table.createdAt),
]);
