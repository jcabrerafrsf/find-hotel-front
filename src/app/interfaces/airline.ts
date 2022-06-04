export interface Airline {
    name: string;
    code: string;
    sign_in_available: boolean;
    sign_up_available: boolean;
    display_name: string;
    is_commercial: boolean;
    employee_number_required: boolean;
    partner: boolean;
    lang: boolean;
    currency: boolean;
    email_domains: string[];
    airline_blog_uri: string;
    white_label_url: string;
}