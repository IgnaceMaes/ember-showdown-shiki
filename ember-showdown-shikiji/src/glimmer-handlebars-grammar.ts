/**
 * Base-64 encoded grammar for Glimmer Handlebars
 * @see https://github.com/IgnaceMaes/glimmer-textmate-grammar/blob/main/handlebars.tmLanguage.json
 */
export const glimmerHandlebarsGrammar = JSON.parse(
  atob(
    'ewogICIkc2NoZW1hIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9tYXJ0aW5yaW5nL3RtbGFuZ3VhZ2UvbWFzdGVyL3RtbGFuZ3VhZ2UuanNvbiIsCiAgIm5hbWUiOiAiR2xpbW1lciIsCiAgInNjb3BlTmFtZSI6ICJ0ZXh0Lmh0bWwuaGFuZGxlYmFycyIsCiAgImZpbGVUeXBlcyI6IFsiaGJzIl0sCiAgInBhdHRlcm5zIjogWwogICAgewogICAgICAiaW5jbHVkZSI6ICIjc3R5bGUiCiAgICB9LAogICAgewogICAgICAiaW5jbHVkZSI6ICIjc2NyaXB0IgogICAgfSwKICAgIHsKICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItZWxzZS1ibG9jayIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWJvb2xzIgogICAgfSwKICAgIHsKICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3BlY2lhbC1ibG9jayIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXVuZXNjYXBlZC1leHByZXNzaW9uIgogICAgfSwKICAgIHsKICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItY29tbWVudC1ibG9jayIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWNvbW1lbnQtaW5saW5lIgogICAgfSwKICAgIHsKICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItZXhwcmVzc2lvbi1wcm9wZXJ0eSIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWNvbnRyb2wtZXhwcmVzc2lvbiIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWV4cHJlc3Npb24iCiAgICB9LAogICAgewogICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1ibG9jayIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNodG1sLXRhZyIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNjb21wb25lbnQtdGFnIgogICAgfSwKICAgIHsKICAgICAgImluY2x1ZGUiOiAiI2h0bWwtY29tbWVudCIKICAgIH0sCiAgICB7CiAgICAgICJpbmNsdWRlIjogIiNlbnRpdGllcyIKICAgIH0KICBdLAogICJyZXBvc2l0b3J5IjogewogICAgImdsaW1tZXItY29tcG9uZW50LXBhdGgiOiB7CiAgICAgICJtYXRjaCI6ICIoOjp8XFwkfFxcLikiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9CiAgICAgIH0KICAgIH0sCiAgICAic3RyaW5nLWRvdWJsZS1xdW90ZWQtaGFuZGxlYmFycyI6IHsKICAgICAgIm5hbWUiOiAic3RyaW5nLnF1b3RlZC5kb3VibGUuaGFuZGxlYmFycyIsCiAgICAgICJiZWdpbiI6ICJcIiIsCiAgICAgICJiZWdpbkNhcHR1cmVzIjogewogICAgICAgICIwIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4uaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJlbmQiOiAiXCIiLAogICAgICAiZW5kQ2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnN0cmluZy5lbmQuaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAibmFtZSI6ICJjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmhhbmRsZWJhcnMiLAogICAgICAgICAgIm1hdGNoIjogIlxcXFxcIiIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAic3RyaW5nLXNpbmdsZS1xdW90ZWQtaGFuZGxlYmFycyI6IHsKICAgICAgIm5hbWUiOiAic3RyaW5nLnF1b3RlZC5zaW5nbGUuaGFuZGxlYmFycyIsCiAgICAgICJiZWdpbiI6ICInIiwKICAgICAgImJlZ2luQ2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnN0cmluZy5iZWdpbi5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfSwKICAgICAgImVuZCI6ICInIiwKICAgICAgImVuZENhcHR1cmVzIjogewogICAgICAgICIwIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuZW5kLmhhbmRsZWJhcnMiCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgIm5hbWUiOiAiY29uc3RhbnQuY2hhcmFjdGVyLmVzY2FwZS5oYW5kbGViYXJzIiwKICAgICAgICAgICJtYXRjaCI6ICJcXFxcJyIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAic3RyaW5nLWRvdWJsZS1xdW90ZWQtaHRtbCI6IHsKICAgICAgIm5hbWUiOiAic3RyaW5nLnF1b3RlZC5kb3VibGUuaHRtbC5oYW5kbGViYXJzIiwKICAgICAgImJlZ2luIjogIlwiIiwKICAgICAgImJlZ2luQ2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnN0cmluZy5iZWdpbi5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfSwKICAgICAgImVuZCI6ICJcIiIsCiAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAiMCI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJuYW1lIjogImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUuaGFuZGxlYmFycyIsCiAgICAgICAgICAibWF0Y2giOiAiXFxcXFwiIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItYm9vbHMiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1leHByZXNzaW9uLXByb3BlcnR5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItY29udHJvbC1leHByZXNzaW9uIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItZXhwcmVzc2lvbiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWJsb2NrIgogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgICJzdHJpbmctc2luZ2xlLXF1b3RlZC1odG1sIjogewogICAgICAibmFtZSI6ICJzdHJpbmcucXVvdGVkLnNpbmdsZS5odG1sLmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiJyIsCiAgICAgICJiZWdpbkNhcHR1cmVzIjogewogICAgICAgICIwIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4uaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJlbmQiOiAiJyIsCiAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAiMCI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJuYW1lIjogImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUuaGFuZGxlYmFycyIsCiAgICAgICAgICAibWF0Y2giOiAiXFxcXCciCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1ib29scyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWV4cHJlc3Npb24tcHJvcGVydHkiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1jb250cm9sLWV4cHJlc3Npb24iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1leHByZXNzaW9uIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItYmxvY2siCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImJvb2xlYW4iOiB7CiAgICAgICJtYXRjaCI6ICJ0cnVlfGZhbHNlfHVuZGVmaW5lZHxudWxsIiwKICAgICAgImNhcHR1cmVzIjogewogICAgICAgICIwIjogewogICAgICAgICAgIm5hbWUiOiAic3RyaW5nLnJlZ2V4cCIKICAgICAgICB9LAogICAgICAgICIxIjogewogICAgICAgICAgIm5hbWUiOiAic3RyaW5nLnJlZ2V4cCIKICAgICAgICB9LAogICAgICAgICIyIjogewogICAgICAgICAgIm5hbWUiOiAic3RyaW5nLnJlZ2V4cCIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFtdCiAgICB9LAogICAgImRpZ2l0IjogewogICAgICAibWF0Y2giOiAiXFxkKihcXC4pP1xcZCsiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJjb25zdGFudC5udW1lcmljIgogICAgICAgIH0sCiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJjb25zdGFudC5udW1lcmljIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJjb25zdGFudC5udW1lcmljIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogW10KICAgIH0sCiAgICAicGFyYW0iOiB7CiAgICAgICJtYXRjaCI6ICIoQHx0aGlzLikoW2EtekEtWjAtOV8uLV0rKSIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMCI6IHsKICAgICAgICAgICJuYW1lIjogInN1cHBvcnQuZnVuY3Rpb24iLAogICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm5hbWUiOiAidmFyaWFibGUubGFuZ3VhZ2UiLAogICAgICAgICAgICAgICJtYXRjaCI6ICIoQHx0aGlzKSIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKFxcLikrIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfSwKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInN1cHBvcnQuZnVuY3Rpb24iLAogICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWciLAogICAgICAgICAgICAgICJtYXRjaCI6ICIoXFwuKSsiCiAgICAgICAgICAgIH0KICAgICAgICAgIF0KICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFtdCiAgICB9LAogICAgImF0dGVudGlvbiI6IHsKICAgICAgIm5hbWUiOiAic3RvcmFnZS50eXBlLmNsYXNzLiR7MTovZG93bmNhc2V9IiwKICAgICAgIm1hdGNoIjogIkA/KFRPRE98RklYTUV8Q0hBTkdFRHxYWFh8SURFQXxIQUNLfE5PVEV8UkVWSUVXfE5CfEJVR3xRVUVTVElPTnxURU1QKVxcYiIsCiAgICAgICJwYXR0ZXJucyI6IFtdCiAgICB9LAogICAgImdsaW1tZXItdW5lc2NhcGVkLWV4cHJlc3Npb24iOiB7CiAgICAgICJuYW1lIjogImVudGl0eS51bmVzY2FwZWQuZXhwcmVzc2lvbi5oYW5kbGViYXJzIiwKICAgICAgImJlZ2luIjogInt7eyIsCiAgICAgICJlbmQiOiAifX19IiwKICAgICAgImNhcHR1cmVzIjogewogICAgICAgICIwIjogewogICAgICAgICAgIm5hbWUiOiAia2V5d29yZC5vcGVyYXRvciIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjc3RyaW5nLXNpbmdsZS1xdW90ZWQtaGFuZGxlYmFycyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNzdHJpbmctZG91YmxlLXF1b3RlZC1oYW5kbGViYXJzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3ViZXhwIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI3BhcmFtIgogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgICJnbGltbWVyLWNvbW1lbnQtYmxvY2siOiB7CiAgICAgICJuYW1lIjogImNvbW1lbnQuYmxvY2suZ2xpbW1lciIsCiAgICAgICJiZWdpbiI6ICJ7eyEtLSIsCiAgICAgICJlbmQiOiAiLS19fSIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMCI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24uYmxvY2suY29tbWVudC5nbGltbWVyIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNzY3JpcHQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjYXR0ZW50aW9uIgogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgICJnbGltbWVyLWNvbW1lbnQtaW5saW5lIjogewogICAgICAibmFtZSI6ICJjb21tZW50LmlubGluZS5nbGltbWVyIiwKICAgICAgImJlZ2luIjogInt7ISIsCiAgICAgICJlbmQiOiAifX0iLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmJsb2NrLmNvbW1lbnQuZ2xpbW1lciIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjc2NyaXB0IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2F0dGVudGlvbiIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAiZ2xpbW1lci1ib29scyI6IHsKICAgICAgIm5hbWUiOiAiZW50aXR5LmV4cHJlc3Npb24uaGFuZGxlYmFycyIsCiAgICAgICJtYXRjaCI6ICIoe3t+PykodHJ1ZXxmYWxzZXxudWxsfHVuZGVmaW5lZHxcXGQqKFxcLik/XFxkKykofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdHJpbmcucmVnZXhwIgogICAgICAgIH0sCiAgICAgICAgIjMiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdHJpbmcucmVnZXhwIgogICAgICAgIH0sCiAgICAgICAgIjQiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0KICAgICAgfQogICAgfSwKICAgICJnbGltbWVyLWVsc2UtYmxvY2siOiB7CiAgICAgICJuYW1lIjogImVudGl0eS5leHByZXNzaW9uLmhhbmRsZWJhcnMiLAogICAgICAibWF0Y2giOiAiKHt7fj8pKGVsc2VcXHNbYS16XStcXHN8ZWxzZSkoWygpQGEtekEtWjAtOVxcLlxcc1xcYl0rKT8ofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9LAogICAgICAgICIxIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWciCiAgICAgICAgfSwKICAgICAgICAiMiI6IHsKICAgICAgICAgICJuYW1lIjogImtleXdvcmQuY29udHJvbCIKICAgICAgICB9LAogICAgICAgICIzIjogewogICAgICAgICAgIm5hbWUiOiAia2V5d29yZC5jb250cm9sIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXN1YmV4cCIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNzdHJpbmctc2luZ2xlLXF1b3RlZC1oYW5kbGViYXJzIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgImluY2x1ZGUiOiAiI3N0cmluZy1kb3VibGUtcXVvdGVkLWhhbmRsZWJhcnMiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAiaW5jbHVkZSI6ICIjYm9vbGVhbiIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNkaWdpdCIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNwYXJhbSIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXBhcmFtZXRlci1uYW1lIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItcGFyYW1ldGVyLXZhbHVlIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfSwKICAgICAgICAiNCI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIgogICAgICAgIH0KICAgICAgfQogICAgfSwKICAgICJnbGltbWVyLXNwZWNpYWwtYmxvY2siOiB7CiAgICAgICJuYW1lIjogImVudGl0eS5leHByZXNzaW9uLmhhbmRsZWJhcnMiLAogICAgICAibWF0Y2giOiAiKHt7fj8pKHlpZWxkfG91dGxldCkofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjAiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLmNvbnRyb2wiCiAgICAgICAgfSwKICAgICAgICAiMyI6IHsKICAgICAgICAgICJuYW1lIjogImtleXdvcmQub3BlcmF0b3IiCiAgICAgICAgfQogICAgICB9CiAgICB9LAogICAgImdsaW1tZXItYXMtc3R1ZmYiOiB7CiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjYXMta2V5d29yZCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNhcy1wYXJhbXMiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItYmxvY2siOiB7CiAgICAgICJuYW1lIjogImVudGl0eS5leHByZXNzaW9uLmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiKHt7fj8pKCN8LykoKFtAXFwkYS16QS1aMC05Xy8uLV0rKSkiLAogICAgICAiZW5kIjogIih+P319KSIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9LAogICAgICAgICIzIjogewogICAgICAgICAgIm5hbWUiOiAia2V5d29yZC5jb250cm9sIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWNvbXBvbmVudC1wYXRoIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWciLAogICAgICAgICAgICAgICJtYXRjaCI6ICIoXFwvKSsiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIsCiAgICAgICAgICAgICAgIm1hdGNoIjogIihcXC4pKyIKICAgICAgICAgICAgfQogICAgICAgICAgXQogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWFzLXN0dWZmIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3VwZXhwLWNvbnRlbnQiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItZXhwcmVzc2lvbi1wcm9wZXJ0eSI6IHsKICAgICAgIm5hbWUiOiAiZW50aXR5LmV4cHJlc3Npb24uaGFuZGxlYmFycyIsCiAgICAgICJiZWdpbiI6ICIoe3t+PykoKEB8dGhpcy4pKFthLXpBLVowLTlfLi1dKykpIiwKICAgICAgImVuZCI6ICIofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjMiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdXBwb3J0LmZ1bmN0aW9uIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogInZhcmlhYmxlLmxhbmd1YWdlIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKEB8dGhpcykiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIsCiAgICAgICAgICAgICAgIm1hdGNoIjogIihcXC4pKyIKICAgICAgICAgICAgfQogICAgICAgICAgXQogICAgICAgIH0sCiAgICAgICAgIjQiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdXBwb3J0LmZ1bmN0aW9uIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKFxcLikrIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3VwZXhwLWNvbnRlbnQiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItZXhwcmVzc2lvbiI6IHsKICAgICAgIm5hbWUiOiAiZW50aXR5LmV4cHJlc3Npb24uaGFuZGxlYmFycyIsCiAgICAgICJiZWdpbiI6ICIoe3t+PykoKFsoKVxcc0BhLXpBLVowLTlfLi1dKykpIiwKICAgICAgImVuZCI6ICIofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjMiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdXBwb3J0LmZ1bmN0aW9uIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogInN0cmluZy5yZWdleHAiLAogICAgICAgICAgICAgICJtYXRjaCI6ICJbKF0rIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm5hbWUiOiAic3RyaW5nLnJlZ2V4cCIsCiAgICAgICAgICAgICAgIm1hdGNoIjogIlspXSsiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIsCiAgICAgICAgICAgICAgIm1hdGNoIjogIihcXC4pKyIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXN1cGV4cC1jb250ZW50IgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3VwZXhwLWNvbnRlbnQiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItc3VwZXhwLWNvbnRlbnQiOiB7CiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1zdWJleHAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjc3RyaW5nLXNpbmdsZS1xdW90ZWQtaGFuZGxlYmFycyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNzdHJpbmctZG91YmxlLXF1b3RlZC1oYW5kbGViYXJzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2Jvb2xlYW4iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZGlnaXQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjcGFyYW0iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1wYXJhbWV0ZXItbmFtZSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXBhcmFtZXRlci12YWx1ZSIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAiZ2xpbW1lci1jb250cm9sLWV4cHJlc3Npb24iOiB7CiAgICAgICJuYW1lIjogImVudGl0eS5leHByZXNzaW9uLmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiKHt7fj8pKChbLWEtei9dKylcXHMpIiwKICAgICAgImVuZCI6ICIofj99fSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLm9wZXJhdG9yIgogICAgICAgIH0sCiAgICAgICAgIjMiOiB7CiAgICAgICAgICAibmFtZSI6ICJrZXl3b3JkLmNvbnRyb2wiCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItc3VwZXhwLWNvbnRlbnQiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItc3ViZXhwIjogewogICAgICAibmFtZSI6ICJlbnRpdHkuc3ViZXhwcmVzc2lvbi5oYW5kbGViYXJzIiwKICAgICAgImJlZ2luIjogIihcXCgpKFtAYS16QS1aMC05Li1dKykiLAogICAgICAiZW5kIjogIihcXCkpIiwKICAgICAgImNhcHR1cmVzIjogewogICAgICAgICIxIjogewogICAgICAgICAgIm5hbWUiOiAia2V5d29yZC5vdGhlciIKICAgICAgICB9LAogICAgICAgICIyIjogewogICAgICAgICAgIm5hbWUiOiAia2V5d29yZC5jb250cm9sIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLXN1cGV4cC1jb250ZW50IgogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgICJhcy1rZXl3b3JkIjogewogICAgICAibmFtZSI6ICJrZXl3b3JkLmNvbnRyb2wiLAogICAgICAibWF0Y2giOiAiXFxzXFxiKGFzKVxcYig/PVxcc1xcfCkiLAogICAgICAicGF0dGVybnMiOiBbXQogICAgfSwKICAgICJhcy1wYXJhbXMiOiB7CiAgICAgICJuYW1lIjogImtleXdvcmQuYmxvY2stcGFyYW1zLmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiKD88IVxcfCkoXFx8KSIsCiAgICAgICJiZWdpbkNhcHR1cmVzIjogewogICAgICAgICIxIjogewogICAgICAgICAgIm5hbWUiOiAiY29uc3RhbnQub3RoZXIuc3ltYm9sLmJlZ2luLmhhbmRsZWJhcnMiCiAgICAgICAgfQogICAgICB9LAogICAgICAiZW5kIjogIihcXHwpKD8hXFx8KSIsCiAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogImNvbnN0YW50Lm90aGVyLnN5bWJvbC5lbmQuaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjdmFyaWFibGUiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItcGFyYW1ldGVyLXZhbHVlIjogewogICAgICAibWF0Y2giOiAiXFxiKFthLXpBLVowLTk6Xy4tXSspXFxiKD8hPSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJzdXBwb3J0LmZ1bmN0aW9uIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKFxcLikrIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbXQogICAgfSwKICAgICJnbGltbWVyLXBhcmFtZXRlci1uYW1lIjogewogICAgICAibWF0Y2giOiAiXFxiKFthLXpBLVowLTlfLV0rKShcXHM/PSkiLAogICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJ2YXJpYWJsZS5wYXJhbWV0ZXIubmFtZS5oYW5kbGViYXJzIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmV4cHJlc3Npb24uaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFtdCiAgICB9LAogICAgInZhcmlhYmxlIjogewogICAgICAibmFtZSI6ICJzdXBwb3J0LmZ1bmN0aW9uIiwKICAgICAgIm1hdGNoIjogIlxcYihbYS16QS1aMC05LV9dKylcXGIiLAogICAgICAicGF0dGVybnMiOiBbXQogICAgfSwKICAgICJzdHlsZSI6IHsKICAgICAgImJlZ2luIjogIiheWyBcXHRdKyk/KD89PCg/aTpzdHlsZSlcXGIoPyEtKSkiLAogICAgICAiYmVnaW5DYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLndoaXRlc3BhY2UuZW1iZWRkZWQubGVhZGluZy5odG1sIgogICAgICAgIH0KICAgICAgfSwKICAgICAgImVuZCI6ICIoPyFcXEcpKFsgXFx0XSokXFxuPyk/IiwKICAgICAgImVuZENhcHR1cmVzIjogewogICAgICAgICIxIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24ud2hpdGVzcGFjZS5lbWJlZGRlZC50cmFpbGluZy5odG1sIgogICAgICAgIH0KICAgICAgfSwKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJiZWdpbiI6ICIoP2kpKDwpKHN0eWxlKSg/PVxcc3wvPz4pIiwKICAgICAgICAgICJiZWdpbkNhcHR1cmVzIjogewogICAgICAgICAgICAiMCI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJtZXRhLnRhZy5tZXRhZGF0YS5zdHlsZS5zdGFydC5odG1sIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiMSI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZy5iZWdpbi5odG1sIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiMiI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJlbnRpdHkubmFtZS50YWcuaHRtbCIKICAgICAgICAgICAgfQogICAgICAgICAgfSwKICAgICAgICAgICJlbmQiOiAiKD9pKSgoPCkvKShzdHlsZSlcXHMqKD4pIiwKICAgICAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAgICAgIjAiOiB7CiAgICAgICAgICAgICAgIm5hbWUiOiAibWV0YS50YWcubWV0YWRhdGEuc3R5bGUuZW5kLmh0bWwiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnLmJlZ2luLmh0bWwiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICIyIjogewogICAgICAgICAgICAgICJuYW1lIjogInNvdXJjZS5jc3MtaWdub3JlZC12c2NvZGUiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICIzIjogewogICAgICAgICAgICAgICJuYW1lIjogImVudGl0eS5uYW1lLnRhZy5odG1sIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiNCI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZy5lbmQuaHRtbCIKICAgICAgICAgICAgfQogICAgICAgICAgfSwKICAgICAgICAgICJuYW1lIjogIm1ldGEuZW1iZWRkZWQuYmxvY2suaHRtbCIsCiAgICAgICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAiYmVnaW4iOiAiXFxHIiwKICAgICAgICAgICAgICAiY2FwdHVyZXMiOiB7CiAgICAgICAgICAgICAgICAiMSI6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWcuZW5kLmh0bWwiCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAiZW5kIjogIig+KSIsCiAgICAgICAgICAgICAgIm5hbWUiOiAibWV0YS50YWcubWV0YWRhdGEuc3R5bGUuc3RhcnQuaHRtbCIsCiAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1hcmd1bWVudCIKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICJpbmNsdWRlIjogIiNodG1sLWF0dHJpYnV0ZSIKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAiYmVnaW4iOiAiKD8hXFxHKSIsCiAgICAgICAgICAgICAgImVuZCI6ICIoPz08Lyg/aTpzdHlsZSkpIiwKICAgICAgICAgICAgICAibmFtZSI6ICJzb3VyY2UuY3NzIiwKICAgICAgICAgICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICJpbmNsdWRlIjogInNvdXJjZS5jc3MiCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgInNjcmlwdCI6IHsKICAgICAgImJlZ2luIjogIiheWyBcXHRdKyk/KD89PCg/aTpzY3JpcHQpXFxiKD8hLSkpIiwKICAgICAgImJlZ2luQ2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi53aGl0ZXNwYWNlLmVtYmVkZGVkLmxlYWRpbmcuaHRtbCIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJlbmQiOiAiKD8hXFxHKShbIFxcdF0qJFxcbj8pPyIsCiAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLndoaXRlc3BhY2UuZW1iZWRkZWQudHJhaWxpbmcuaHRtbCIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiYmVnaW4iOiAiKDwpKCg/aTpzY3JpcHQpKVxcYiIsCiAgICAgICAgICAiYmVnaW5DYXB0dXJlcyI6IHsKICAgICAgICAgICAgIjAiOiB7CiAgICAgICAgICAgICAgIm5hbWUiOiAibWV0YS50YWcubWV0YWRhdGEuc2NyaXB0LnN0YXJ0Lmh0bWwiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnLmJlZ2luLmh0bWwiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICIyIjogewogICAgICAgICAgICAgICJuYW1lIjogImVudGl0eS5uYW1lLnRhZy5odG1sIgogICAgICAgICAgICB9CiAgICAgICAgICB9LAogICAgICAgICAgImVuZCI6ICIoLykoKD9pOnNjcmlwdCkpKD4pIiwKICAgICAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAgICAgIjAiOiB7CiAgICAgICAgICAgICAgIm5hbWUiOiAibWV0YS50YWcubWV0YWRhdGEuc2NyaXB0LmVuZC5odG1sIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiMSI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZy5iZWdpbi5odG1sIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiMiI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJlbnRpdHkubmFtZS50YWcuaHRtbCIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgIjMiOiB7CiAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWcuZW5kLmh0bWwiCiAgICAgICAgICAgIH0KICAgICAgICAgIH0sCiAgICAgICAgICAibmFtZSI6ICJtZXRhLmVtYmVkZGVkLmJsb2NrLmh0bWwiLAogICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgImJlZ2luIjogIlxcRyIsCiAgICAgICAgICAgICAgImVuZCI6ICIoPz0vKSIsCiAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAiYmVnaW4iOiAiKD4pIiwKICAgICAgICAgICAgICAgICAgImJlZ2luQ2FwdHVyZXMiOiB7CiAgICAgICAgICAgICAgICAgICAgIjAiOiB7CiAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJtZXRhLnRhZy5tZXRhZGF0YS5zY3JpcHQuc3RhcnQuaHRtbCIKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWcuZW5kLmh0bWwiCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAiZW5kIjogIigoPCkpKD89Lyg/aTpzY3JpcHQpKSIsCiAgICAgICAgICAgICAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAgICAgICAgICAgICAiMCI6IHsKICAgICAgICAgICAgICAgICAgICAgICJuYW1lIjogIm1ldGEudGFnLm1ldGFkYXRhLnNjcmlwdC5lbmQuaHRtbCIKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWcuYmVnaW4uaHRtbCIKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICIyIjogewogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAic291cmNlLmpzLWlnbm9yZWQtdnNjb2RlIgogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICJiZWdpbiI6ICJcXEciLAogICAgICAgICAgICAgICAgICAgICAgImVuZCI6ICIoPz08Lyg/aTpzY3JpcHQpKSIsCiAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJzb3VyY2UuanMiLAogICAgICAgICAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgImJlZ2luIjogIiheWyBcXHRdKyk/KD89Ly8pIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAiYmVnaW5DYXB0dXJlcyI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi53aGl0ZXNwYWNlLmNvbW1lbnQubGVhZGluZy5qcyIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICJlbmQiOiAiKD8hXFxHKSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYmVnaW4iOiAiLy8iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYmVnaW5DYXB0dXJlcyI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiMCI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24uY29tbWVudC5qcyIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbmQiOiAiKD89PC9zY3JpcHQpfFxcbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIjogImNvbW1lbnQubGluZS5kb3VibGUtc2xhc2guanMiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgXQogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgImJlZ2luIjogIi9cXCoiLAogICAgICAgICAgICAgICAgICAgICAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICIwIjogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmNvbW1lbnQuanMiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAiZW5kIjogIlxcKi98KD89PC9zY3JpcHQpIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJjb21tZW50LmJsb2NrLmpzIgogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgImluY2x1ZGUiOiAic291cmNlLmpzIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICBdCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBdCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAiYmVnaW4iOiAiKD9peDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCg/PVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlXFxzKj1cXHMqXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgnfFwifClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgtaGFuZGxlYmFyc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHwgKHgtKGhhbmRsZWJhcnMtKT98bmctKT90ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHwgaHRtbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcXHNcIic+XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkiLAogICAgICAgICAgICAgICAgICAiZW5kIjogIigoPCkpKD89Lyg/aTpzY3JpcHQpKSIsCiAgICAgICAgICAgICAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAgICAgICAgICAgICAiMCI6IHsKICAgICAgICAgICAgICAgICAgICAgICJuYW1lIjogIm1ldGEudGFnLm1ldGFkYXRhLnNjcmlwdC5lbmQuaHRtbCIKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICIxIjogewogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWcuYmVnaW4uaHRtbCIKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICIyIjogewogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAidGV4dC5odG1sLmJhc2ljIgogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgInBhdHRlcm5zIjogWwogICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICJiZWdpbiI6ICIoPyFcXEcpIiwKICAgICAgICAgICAgICAgICAgICAgICJlbmQiOiAiKD89PC8oP2k6c2NyaXB0KSkiLAogICAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAidGV4dC5odG1sLmJhc2ljIiwKICAgICAgICAgICAgICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICJpbmNsdWRlIjogInRleHQuaHRtbC5iYXNpYyIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgXQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgXQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgImJlZ2luIjogIig/PSg/aTp0eXBlKSkiLAogICAgICAgICAgICAgICAgICAiZW5kIjogIig8KSg/PS8oP2k6c2NyaXB0KSkiLAogICAgICAgICAgICAgICAgICAiZW5kQ2FwdHVyZXMiOiB7CiAgICAgICAgICAgICAgICAgICAgIjAiOiB7CiAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJtZXRhLnRhZy5tZXRhZGF0YS5zY3JpcHQuZW5kLmh0bWwiCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAiMSI6IHsKICAgICAgICAgICAgICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnLmJlZ2luLmh0bWwiCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAiaW5jbHVkZSI6ICIjc3RyaW5nLWRvdWJsZS1xdW90ZWQtaHRtbCIKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICJpbmNsdWRlIjogIiNzdHJpbmctc2luZ2xlLXF1b3RlZC1odG1sIgogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItYXJndW1lbnQiCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAiaW5jbHVkZSI6ICIjaHRtbC1hdHRyaWJ1dGUiCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImh0bWwtY29tbWVudCI6IHsKICAgICAgIm5hbWUiOiAiY29tbWVudC5ibG9jay5odG1sLmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiPCEtLSIsCiAgICAgICJlbmQiOiAiLS1cXHMqPiIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMCI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24uY29tbWVudC5odG1sLmhhbmRsZWJhcnMiCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2F0dGVudGlvbiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJtYXRjaCI6ICItLSIsCiAgICAgICAgICAibmFtZSI6ICJpbnZhbGlkLmlsbGVnYWwuYmFkLWNvbW1lbnRzLW9yLUNEQVRBLmh0bWwuaGFuZGxlYmFycyIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAidGFnLWxpa2UtY29udGVudCI6IHsKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNnbGltbWVyLWJvb2xzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItdW5lc2NhcGVkLWV4cHJlc3Npb24iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1jb21tZW50LWJsb2NrIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItY29tbWVudC1pbmxpbmUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1leHByZXNzaW9uLXByb3BlcnR5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2Jvb2xlYW4iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZGlnaXQiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1jb250cm9sLWV4cHJlc3Npb24iCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1leHByZXNzaW9uIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItYmxvY2siCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjc3RyaW5nLWRvdWJsZS1xdW90ZWQtaHRtbCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNzdHJpbmctc2luZ2xlLXF1b3RlZC1odG1sIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI2dsaW1tZXItYXMtc3R1ZmYiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1hcmd1bWVudCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJpbmNsdWRlIjogIiNodG1sLWF0dHJpYnV0ZSIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAiY29tcG9uZW50LXRhZyI6IHsKICAgICAgIm5hbWUiOiAibWV0YS50YWcuYW55LmhhbmRsZWJhcnMiLAogICAgICAiYmVnaW4iOiAiKDxcXC8/KShAfHRoaXMuKT8oW2EtekEtWjAtOS1cXCQ6XFwuXSspXFxiIiwKICAgICAgImJlZ2luQ2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9LAogICAgICAgICIyIjogewogICAgICAgICAgIm5hbWUiOiAic3VwcG9ydC5mdW5jdGlvbiIsCiAgICAgICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAibmFtZSI6ICJ2YXJpYWJsZS5sYW5ndWFnZSIsCiAgICAgICAgICAgICAgIm1hdGNoIjogIihAfHRoaXMpIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWciLAogICAgICAgICAgICAgICJtYXRjaCI6ICIoXFwuKSsiCiAgICAgICAgICAgIH0KICAgICAgICAgIF0KICAgICAgICB9LAogICAgICAgICIzIjogewogICAgICAgICAgIm5hbWUiOiAiZW50aXR5Lm5hbWUudHlwZSIsCiAgICAgICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAiaW5jbHVkZSI6ICIjZ2xpbW1lci1jb21wb25lbnQtcGF0aCIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogIm1hcmt1cC5ib2xkIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKEB8OnxcXCQpIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfQogICAgICB9LAogICAgICAiZW5kIjogIihcXC8/KSg+KSIsCiAgICAgICJlbmRDYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICB7CiAgICAgICAgICAiaW5jbHVkZSI6ICIjdGFnLWxpa2UtY29udGVudCIKICAgICAgICB9CiAgICAgIF0KICAgIH0sCiAgICAiaHRtbC10YWciOiB7CiAgICAgICJuYW1lIjogIm1ldGEudGFnLmFueS5oYW5kbGViYXJzIiwKICAgICAgImJlZ2luIjogIig8XFwvPykoW2EtejAtOS1dKykoPyFcXC58OilcXGIiLAogICAgICAiYmVnaW5DYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnIgogICAgICAgIH0sCiAgICAgICAgIjIiOiB7CiAgICAgICAgICAibmFtZSI6ICJlbnRpdHkubmFtZS50YWcuaHRtbC5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfSwKICAgICAgImVuZCI6ICIoXFwvPykoPikiLAogICAgICAiZW5kQ2FwdHVyZXMiOiB7CiAgICAgICAgIjEiOiB7CiAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnRhZyIKICAgICAgICB9LAogICAgICAgICIyIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi50YWciCiAgICAgICAgfQogICAgICB9LAogICAgICAicGF0dGVybnMiOiBbCiAgICAgICAgewogICAgICAgICAgImluY2x1ZGUiOiAiI3RhZy1saWtlLWNvbnRlbnQiCiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgImdsaW1tZXItYXJndW1lbnQiOiB7CiAgICAgICJtYXRjaCI6ICJcXHMoQFthLXpBLVowLTk6Xy4tXSspKD0pPyIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogImVudGl0eS5vdGhlci5hdHRyaWJ1dGUtbmFtZS5oYW5kbGViYXJzLmFyZ3VtZW50IiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogIm1hcmt1cC5pdGFsaWMiLAogICAgICAgICAgICAgICJtYXRjaCI6ICIoQCkiCiAgICAgICAgICAgIH0KICAgICAgICAgIF0KICAgICAgICB9LAogICAgICAgICIyIjogewogICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uc2VwYXJhdG9yLmtleS12YWx1ZS5odG1sLmhhbmRsZWJhcnMiCiAgICAgICAgfQogICAgICB9CiAgICB9LAogICAgImh0bWwtYXR0cmlidXRlIjogewogICAgICAibWF0Y2giOiAiXFxzKFthLXpBLVowLTk6Xy4tXSspKD0pPyIsCiAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAiMSI6IHsKICAgICAgICAgICJuYW1lIjogImVudGl0eS5vdGhlci5hdHRyaWJ1dGUtbmFtZS5oYW5kbGViYXJzIiwKICAgICAgICAgICJwYXR0ZXJucyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICJuYW1lIjogIm1hcmt1cC5ib2xkIiwKICAgICAgICAgICAgICAibWF0Y2giOiAiKFxcLlxcLlxcLmF0dHJpYnV0ZXMpIgogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfSwKICAgICAgICAiMiI6IHsKICAgICAgICAgICJuYW1lIjogInB1bmN0dWF0aW9uLnNlcGFyYXRvci5rZXktdmFsdWUuaHRtbC5oYW5kbGViYXJzIgogICAgICAgIH0KICAgICAgfQogICAgfSwKICAgICJlbnRpdGllcyI6IHsKICAgICAgInBhdHRlcm5zIjogWwogICAgICAgIHsKICAgICAgICAgICJuYW1lIjogImNvbnN0YW50LmNoYXJhY3Rlci5lbnRpdHkuaHRtbC5oYW5kbGViYXJzIiwKICAgICAgICAgICJtYXRjaCI6ICIoJikoW2EtekEtWjAtOV0rfCNbMC05XSt8I3hbMC05YS1mQS1GXSspKDspIiwKICAgICAgICAgICJjYXB0dXJlcyI6IHsKICAgICAgICAgICAgIjEiOiB7CiAgICAgICAgICAgICAgIm5hbWUiOiAicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5lbnRpdHkuaHRtbC5oYW5kbGViYXJzIgogICAgICAgICAgICB9LAogICAgICAgICAgICAiMyI6IHsKICAgICAgICAgICAgICAibmFtZSI6ICJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmVudGl0eS5odG1sLmhhbmRsZWJhcnMiCiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICJuYW1lIjogImludmFsaWQuaWxsZWdhbC5iYWQtYW1wZXJzYW5kLmh0bWwuaGFuZGxlYmFycyIsCiAgICAgICAgICAibWF0Y2giOiAiJiIKICAgICAgICB9CiAgICAgIF0KICAgIH0KICB9Cn0=',
  ),
);
