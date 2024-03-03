CREATE OR REPLACE FUNCTION trunc_object_type(input_coin_type text)
RETURNS text LANGUAGE plpgsql AS $$
DECLARE
    formatted_type text;
BEGIN
    -- Example of formatting the input coin type to truncate leading zeros in the hexadecimal value
    -- This is a simplified approach; further customization may be needed based on your exact formatting requirements
    
    -- Truncate leading zeros for the main coin type
    formatted_type := REGEXP_REPLACE(input_coin_type, '0x0+([0-9a-fA-F]+)::', '0x\1::', 'g');
    
    -- Truncate leading zeros for the nested coin type within <>
    formatted_type := REGEXP_REPLACE(formatted_type, '<0x0+([0-9a-fA-F]+)>', '<0x\1>', 'g');

    RETURN formatted_type;
END;
$$;
