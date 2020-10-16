export const getApiTypeDefs = () => {
  return [
    `
      type ApiParam {
        type: String!
        name: String!
        description: String
      }

      type ApiEndpoint implements Node {
        sidebar_order: Int
        title: String!
        fields: Fields

        api_path: String!
        authentication:  String
        description: String
        example_request: String
        example_response: String
        method: String!
        parameters: [ApiParam]
        path_parameters: [ApiParam]
        query_parameters: [ApiParam]
        warning: String
      }
      
      type openApiPathDescription implements Node @childOf(types: ["openAPI"], mimeTypes: ["text/markdown"]) {
        id: ID!
      }
      
      type openApiPathParameter implements Node @childOf(types: ["openAPI"], mimeTypes: ["text/markdown"], many: true) {
        id: ID!
      }
      `,
  ];
};
