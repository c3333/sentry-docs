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
      
      type Mdx implements Node @childOf(types: ["openApiPathDescription"], mimeTypes: ["text/markdown"]) {
        id: ID!
      }
      
      type Mdx implements Node @childOf(types: ["openApiPathParameter"], mimeTypes: ["text/markdown"], many: true) {
        id: ID!
      }
      `,
  ];
};
