// from version 1.0 => https://docs.opensea.io/v1.0/reference/retrieving-a-single-asset
// single NFT in opensea is called and asset
export interface OpeanSeaCollectionResponse {
    next: string | null,
    previous: string | null,
    assets: OpenSeaAssetType[]
}

export interface OpenSeaAssetType {
    id:                         number;
    token_id:                   string;
    num_sales:                  number;
    background_color:           null;
    image_url:                  string;
    image_preview_url:          string;
    image_thumbnail_url:        string;
    image_original_url:         string;
    animation_url:              null;
    animation_original_url:     null;
    name:                       string;
    description:                null;
    external_link:              string;
    asset_contract:             AssetContract;
    permalink:                  string;
    collection:                 Collection;
    decimals:                   null;
    token_metadata:             null;
    is_nsfw:                    boolean;
    owner:                      null;
    seaport_sell_orders:        null;
    creator:                    Creator;
    traits:                     Trait[];
    last_sale:                  LastSale;
    top_bid:                    null;
    listing_date:               null;
    supports_wyvern:            boolean;
    rarity_data:                null;
    transfer_fee:               null;
    transfer_fee_payment_token: null;
    related_assets:             any[];
    orders:                     null;
    auctions:                   any[];
    top_ownerships:             TopOwnership[];
    ownership:                  null;
    highest_buyer_commitment:   null;
}

export interface AssetContract {
    address:                         string;
    asset_contract_type:             string;
    chain_identifier:                string;
    created_date:                    Date;
    name:                            string;
    nft_version:                     string;
    opensea_version:                 null;
    owner:                           null;
    schema_name:                     string;
    symbol:                          string;
    total_supply:                    null;
    description:                     string;
    external_link:                   string;
    image_url:                       string;
    default_to_fiat:                 boolean;
    dev_buyer_fee_basis_points:      number;
    dev_seller_fee_basis_points:     number;
    only_proxied_transfers:          boolean;
    opensea_buyer_fee_basis_points:  number;
    opensea_seller_fee_basis_points: number;
    buyer_fee_basis_points:          number;
    seller_fee_basis_points:         number;
    payout_address:                  null;
}

export interface Collection {
    payment_tokens:                  PaymentTokenElement[];
    primary_asset_contracts:         AssetContract[];
    traits:                          Traits;
    stats:                           { [key: string]: number };
    banner_image_url:                string;
    chat_url:                        null;
    created_date:                    Date;
    default_to_fiat:                 boolean;
    description:                     string;
    dev_buyer_fee_basis_points:      string;
    dev_seller_fee_basis_points:     string;
    discord_url:                     string;
    display_data:                    DisplayData;
    external_url:                    string;
    featured:                        boolean;
    featured_image_url:              string;
    hidden:                          boolean;
    safelist_request_status:         string;
    image_url:                       string;
    is_subject_to_whitelist:         boolean;
    large_image_url:                 string;
    medium_username:                 null;
    name:                            string;
    only_proxied_transfers:          boolean;
    opensea_buyer_fee_basis_points:  string;
    opensea_seller_fee_basis_points: number;
    payout_address:                  null;
    require_email:                   boolean;
    short_description:               null;
    slug:                            string;
    telegram_url:                    null;
    twitter_username:                string;
    instagram_username:              null;
    wiki_url:                        null;
    is_nsfw:                         boolean;
    fees:                            Fees;
    is_rarity_enabled:               boolean;
    is_creator_fees_enforced:        boolean;
}

export interface DisplayData {
    card_display_style: string;
}

export interface Fees {
    seller_fees:  Traits;
    opensea_fees: OpenseaFees;
}

export interface OpenseaFees {
    "0x0000a26b00c1f0df003000390027140000faa719": number;
}

export interface Traits {
}

export interface PaymentTokenElement {
    id:        number;
    symbol:    string;
    address:   string;
    image_url: string;
    name:      string;
    decimals:  number;
    eth_price: number;
    usd_price: number;
}

export interface Creator {
    user:            User | null;
    address:         string;
    config:          string;
    profile_img_url: string;
}

export interface User {
    username: string;
}

export interface LastSale {
    asset:           Asset;
    asset_bundle:    null;
    event_type:      string;
    event_timestamp: Date;
    auction_type:    null;
    total_price:     string;
    payment_token:   LastSalePaymentToken;
    transaction:     Transaction;
    created_date:    Date;
    quantity:        string;
}

export interface Asset {
    token_id: string;
    decimals: null;
}

export interface LastSalePaymentToken {
    symbol:    string;
    address:   string;
    image_url: string;
    name:      string;
    decimals:  number;
    eth_price: string;
    usd_price: string;
}

export interface Transaction {
    block_hash:        string;
    block_number:      string;
    from_account:      Creator;
    id:                number;
    timestamp:         Date;
    to_account:        Creator;
    transaction_hash:  string;
    transaction_index: string;
}

export interface TopOwnership {
    owner:        Creator;
    quantity:     string;
    created_date: Date;
}

export interface Trait {
    trait_type:   string;
    display_type: null;
    max_value:    null;
    trait_count:  number;
    order:        null;
    value:        string;
}
