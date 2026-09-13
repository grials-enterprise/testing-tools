import { Types } from 'mongoose';

export const licenseFactoryMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  customer: {
    chargebee_id: 'string mock',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    alias: 'johndoe',
    auto_collection: 'on',
    net_term_days: 30,
    allow_direct_debit: true,
    created_at: 1627849200, // timestamp(UTC) in seconds
    taxability: 'taxable',
    updated_at: 1627849200, // timestamp(UTC) in seconds
    resource_version: 1,
    deleted: false,
    card_status: 'active',
    preferred_currency_code: 'USD',
    licenseKey: 'string mock',
    cf_country_of_usage: 'US',
    cf_name_prefix: 'Mr.',
    cf_password: 'password123',
  },
  subscription: {
    chargebee_id: 'string mock',
    plan_id: 'plan_123',
    plan_quantity: 1,
    plan_unit_price: 1000,
    billing_period: 1,
    billing_period_unit: 'month',
    plan_free_quantity: 0,
    status: 'active', // future | in_trial | active | non_renewing | paused | cancelled
    current_term_start: 1627849200,
    current_term_end: 1630441200,
    start_date: 1627849200, // timestamp(UTC) in seconds
    trial_start: 1627849200, // timestamp(UTC) in seconds
    trial_end: 1630441200,
    next_billing_at: 1630441200, // timestamp(UTC) in seconds
    created_at: 1627849200, // timestamp(UTC) in seconds
    updated_at: 1627849200, // timestamp(UTC) in seconds
    has_scheduled_changes: false,
    resource_version: 1,
    deleted: false,
    currency_code: 'USD',
    due_invoices_count: 0,
    cancelled_at: 0, // timestamp(UTC) in seconds
    cancel_reason: 'not_paid', // not_paid | no_card | non_compliant_eu_customer | tax_calculation_failed | currency_incompatible_with_gateway | non_compliant_customer
    reactivate_from: 0, // timestamp(UTC) in seconds
  },
  pin: '1234',
};
