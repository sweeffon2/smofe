FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /workspace/app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY settings.xml .
COPY src ./src
RUN ./mvnw install -DskipTests
# RUN ./mvnw -s settings.xml install -DskipTests
RUN mkdir -p dependency && (cd dependency; jar -xf ../target/*.jar)

FROM eclipse-temurin:17-jre-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*", "it.smofe.smofehr/SmofeHrApplication"]