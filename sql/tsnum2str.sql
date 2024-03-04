CREATE OR REPLACE FUNCTION tsnum2str(timestamp_ms BIGINT)
RETURNS TEXT AS $$
BEGIN
    -- Convert milliseconds to seconds by dividing by 1000
    -- and then to 'timestamp with time zone' using to_timestamp
    -- Finally, format it as ISO 8601 using to_char
    RETURN to_char(to_timestamp(timestamp_ms / 1000.0), 'YYYY-MM-DD"T"HH24:MI:SS"Z"');
END;
$$ LANGUAGE plpgsql;
