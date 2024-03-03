CREATE OR REPLACE FUNCTION trunc_bytea(bytea_value bytea)
RETURNS text LANGUAGE plpgsql AS $$
DECLARE
    hex_text text;
BEGIN
    -- Convert bytea to hex text
    hex_text := encode(bytea_value, 'hex');

    -- Truncate and format the string
    RETURN '0x' || left(hex_text, 4) || '...' || right(hex_text, 4);
END;
$$;
