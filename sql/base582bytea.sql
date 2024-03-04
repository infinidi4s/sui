CREATE OR REPLACE FUNCTION base582bytea(base58_text text)
RETURNS bytea AS $$
    import base58

    # Decode the base58 encoded string to bytes
    decoded_bytes = base58.b58decode(base58_text)

    # Return the decoded bytes as bytea
    return decoded_bytes
$$ LANGUAGE plpython3u;
