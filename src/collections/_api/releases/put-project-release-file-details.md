---
{
  "authentication": "required", 
  "description": "Update metadata of an existing file.  Currently only the name ofthe file can be changed.", 
  "example_request": "PUT /api/0/projects/the-interstellar-jurisdiction/pump-station/releases/88dc638c8ccb84e5b7c750da882232aa1b394ac1/files/3/ HTTP/1.1\nHost: sentry.io\nAuthorization: Bearer {base64-encoded-key-here}\nContent-Type: application/json\n\n{\n  \"name\": \"/demo/goodbye.txt\"\n}", 
  "example_response": "HTTP/1.1\nContent-Length: 220\nX-XSS-Protection: 1; mode=block\nContent-Language: en\nX-Content-Type-Options: nosniff\nVary: Accept-Language, Cookie\nAllow: GET, PUT, DELETE, HEAD, OPTIONS\nX-Frame-Options: deny\nContent-Type: application/json\n\n{\n  \"dateCreated\": \"2018-09-10T20:37:04.848Z\", \n  \"dist\": null, \n  \"headers\": {\n    \"Content-Type\": \"text/plain; encoding=utf-8\"\n  }, \n  \"id\": \"3\", \n  \"name\": \"/demo/goodbye.txt\", \n  \"sha1\": \"94d6b21e962a9fc65889617ec1f17a1e2fe11b65\", \n  \"size\": 15\n}", 
  "method": "PUT", 
  "parameters": null, 
  "path_parameters": [
    {
      "description": "the slug of the organization the release belongs to.", 
      "name": "organization_slug", 
      "type": "string"
    }, 
    {
      "description": "the slug of the project to update the file of.", 
      "name": "project_slug", 
      "type": "string"
    }, 
    {
      "description": "the version identifier of the release.", 
      "name": "version", 
      "type": "string"
    }, 
    {
      "description": "the ID of the file to update.", 
      "name": "file_id", 
      "type": "string"
    }
  ], 
  "query_parameters": null, 
  "sidebar_order": 20, 
  "title": "Releases"
}
---