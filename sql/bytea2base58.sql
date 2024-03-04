CREATE OR REPLACE FUNCTION bytea2base58(bytea_value bytea)
RETURNS text AS $$
    import base58

    # Convert bytea to bytes (note: PL/Python automatically does this conversion)
    bytes_value = bytea_value

    # Encode bytes to base58 and return the result
    return base58.b58encode(bytes_value).decode('utf-8')
$$ LANGUAGE plpython3u;
